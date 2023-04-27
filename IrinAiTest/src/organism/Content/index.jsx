import React, { useState, useEffect } from 'react';
import { List, ItemFrom } from '../../molecules';
import { successMsg, errorMsg } from '../../Notification';
import { DataContext } from '../../DataContext';

const Content = () => {

  const [data, setData] = useState([]);
  const [item, setItem] = useState({
    name: '',
    email: '',
  });

  const [activity, setActivity] = useState({
    id: -1,
    operation: 0,
  })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    if (localStorage.getItem('list')) {
      setData(JSON.parse(localStorage.getItem('list')));
    }
  }, [])
  

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(data))
  }, [data])
  

  const handleSubmit = () => {
    if (item?.name !== '' && item?.email !== '' && emailRegex.test(item?.email)  ) {
      if (activity.operation === 1) {
        let temp = [...data];
        temp[activity.id] = item;
        setData([...temp]);
        handleClear();
        setActivity(
          {
            id: -1,
            operation: 0,
          }
        )
        successMsg('Edit', 'Item Has been Successfully Edited')
      } else {
        setData([item,...data])
        handleClear();
        successMsg('Added', 'Item Has been Successfully Added')
      }
    } else {
      if (item?.name === '') errorMsg('Error', 'Name field can not be empty. Please enter a valid Name');
      else if (item?.email === '') errorMsg('Error', 'E-mail field can not be empty. Please enter a valid E-mail Id')
      else errorMsg('Error', 'E-mail Id is not valid . Please enter a valid E-mail Id')
    }
  }

  useEffect(() => {
    if (activity.operation === 1) {
      setItem(data[activity.id]);
    }

    else if (activity.operation === 2) {
      let temp = [...data];
      temp.splice(activity.id, 1);
      setData([...temp]);
      setActivity({
        id: -1,
        operation: 0,
      })
      successMsg('Delete', 'Item Has been Successfully Deleted')
    }
  }, [activity]);

  const handleClear = () => {
    setItem({
      name: '',
      email: '',
    })
  }

  const value = {
    data,
    setData,
    activity,
    setActivity,
    item,
    setItem,
    handleClear,
    handleSubmit,
  }

  return (
    <div className='content' value={value}>
      <DataContext.Provider value={value}>
        <ItemFrom />
        <List setData={setData} data={data} setActivity={setActivity} />
      </DataContext.Provider>
    </div>
  )
}

export default Content
