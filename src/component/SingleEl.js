import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  removePassword,
  updatePassword,
} from '../redux/password/passwordActions';

const SingleEl = ({ singleEl, index }) => {
  const [editTable, setEitTable] = useState(false);

  const [editPasswordName, setEditPasswordName] = useState(
    singleEl.passwordName
  );
  const [editPassword, setEditPassword] = useState(singleEl.password);

  const dispatch = useDispatch();

  const onClickUpdate = () => {
    setEitTable(!editTable);
    dispatch(
      updatePassword({
        ...singleEl,
        passwordName: editPasswordName,
        password: editPassword,
      })
    );

    if (editTable) {
      setEditPasswordName(editPasswordName);
      setEditPassword(editPassword);
    }

    setEitTable(!editTable);
  };

  return (
    <tbody key={singleEl}>
      <tr key={singleEl.id}>
        <th>
          <input type='checkbox' />
        </th>
        <td>{index + 1}</td>
        {editTable ? (
          <>
            <td>
              <input
                value={editPasswordName}
                onChange={(e) => setEditPasswordName(e.target.value)}
                className='inputEditPassword'
              />
            </td>
            <td>
              <input
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
                className='inputEditPassword'
              />
            </td>
          </>
        ) : (
          <>
            <td>{singleEl.passwordName}</td>
            <td>{singleEl.password}</td>
          </>
        )}

        <td className='actionIcon'>
          <button className='btn-edit' onClick={onClickUpdate}>
            {editTable ? (
              <span className='actionIcon-icon'>
                <i className='fa fa-check'></i>
              </span>
            ) : (
              <span className='actionIcon-icon'>
                <i className='fa fa-pencil'></i>
              </span>
            )}
          </button>

          <button
            className='btn-remove'
            onClick={() => dispatch(dispatch(removePassword(singleEl.id)))}
          >
            <span className='icon'>
              <i className='fa fa-remove'></i>
            </span>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleEl;
