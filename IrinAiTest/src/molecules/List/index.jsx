import React,{ useContext, useState,useEffect,useRef } from 'react'
import { Button, Item } from '../../atoms'
import { DataContext } from '../../DataContext'

const List = () => {
  
  const { data, setActivity } = useContext(DataContext);

  const [visibleData, setVisibleData] = useState(data?.slice(0, 3));
  const [showMore, setShowMore] = useState(true);
  const loadMoreButtonRef = useRef(null);

  useEffect(() => {
    setVisibleData(data?.slice(0, 3))
  
  }, [data])
  

  const handleLoadMoreClick = () => {
    const nextVisibleData = data?.slice(visibleData.length, visibleData.length + 3);
    setVisibleData([...visibleData, ...nextVisibleData]);
    setShowMore(visibleData.length + 3 < data.length);
  };

  return (
    <div className='list-container'>
      <span className='content-header'>User Details</span>
      <div className='item-content'>
        {
          visibleData.length !== 0 ? visibleData?.map((item, index) => <Item item={item} setActivity={setActivity} index={index} />):<span className='content-text'>No Item to show.</span>
        }

      </div>
      <div className='load-button-container'>
        <Button ref={loadMoreButtonRef} label='Load More' onClick={handleLoadMoreClick} disable={!showMore} />
      </div>
    </div>
  )
}

export default List
