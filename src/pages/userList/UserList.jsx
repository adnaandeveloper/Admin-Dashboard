import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 170,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'email',
      width: 190,
      editable: true,
    },
    {
      field: 'satus',
      headerName: 'Status',
      width: 120,
      editable: true,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: '150',
      renderCell: (params) => {
        return (
          <>
            <button
              className="userListEdit"
              onClick={() => navigate(`/user/${params.row.id}`)}
            >
              edit
            </button>

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={12}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
