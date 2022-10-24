import { FC, Fragment, useMemo } from 'react';
import { useSitesWear } from '../../hooks';
import { Sites } from '../grid';
import { HeadingDashboard } from '../heading';


interface GridSite {

}

export const GridSite: FC<GridSite> = () => {
  const {data:sites, isFetching} = useSitesWear()
  const list = useMemo(() => sites,
    [sites])
    console.log(sites);

    
  return (
    <Fragment>
      <HeadingDashboard title={"Sites"} />
      {
        // <Sites sites={list!} />
      }
      
    </Fragment>
  )
}