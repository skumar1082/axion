import React, { useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStockData, requestSort, resizeWindow } from '../../../action/dashboard';
import { IStore } from '../../../types/store';
import Gridview from '../../../components/grid';
import CardView from '../../../components/card';
import { changeView } from '../../../action/dashboard';
import gridIcon from '../../../assets/images/grid.png';
import cardIcon from '../../../assets/images/card.png';
import { SCREEN_RESOLUTION_THRESHOLD } from '../../../util/constants';

const Page = () => {
  const { headers, lineData, isGridView, sortOrder, resizeTo } = useSelector((state: IStore) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    const fromDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    const toDate = new Date();
    dispatch(getStockData({ fromDate, toDate }));
  }, []);

  /* To handled different deive resolutions tested using chrome device toolbar simulator */
  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  let timeout: NodeJS.Timeout;
  const resize = useCallback(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch(resizeWindow());
    }, 200);
  }, [resizeTo]);

  const handleSort = useCallback(
    (idx: number) => {
      dispatch(requestSort(idx, lineData, sortOrder));
    },
    [headers, lineData, sortOrder],
  );

  return (
    <>
      {useMemo(
        () => (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3>S&amp;G 500 (^GSPC)</h3>
            </div>
            <div
              style={{
                cursor: 'pointer',
                padding: '0.2rem',
              }}
              onClick={() => {
                dispatch(changeView());
              }}
            >
              {resizeTo > SCREEN_RESOLUTION_THRESHOLD ? (
                isGridView ? (
                  <img src={cardIcon} width="30px" alt="Card view" title="Card view" />
                ) : (
                  <img src={gridIcon} width="30px" alt="Grid view" title="Grid view" />
                )
              ) : (
                ''
              )}
            </div>
          </div>
        ),
        [isGridView, resizeTo],
      )}
      {isGridView && resizeTo > SCREEN_RESOLUTION_THRESHOLD ? (
        <Gridview columns={headers} rows={lineData} handleSort={handleSort || null} />
      ) : (
        <CardView columns={headers} rows={lineData} />
      )}
    </>
  );
};

export default Page;
