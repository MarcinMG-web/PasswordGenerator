import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  removePassword,
  updatePassword,
} from '../redux/password/passwordActions';

export interface SingleElProps {
  key: number;
  singleEl: { passwordName: string; password: any; id: number };
  index: number;
  isSelectAll: boolean;
  setIsSelectAll: (isSelectAll: boolean) => void;
}

const SingleEl: React.FC<SingleElProps> = ({
  singleEl,
  index,
  isSelectAll,
  setIsSelectAll,
}) => {
  
  const [editTable, setEitTable] = useState(false);

  const [editPasswordName, setEditPasswordName] = useState(
    singleEl.passwordName
  );
  const [editPassword, setEditPassword] = useState(singleEl.password);

  const dispatch = useDispatch();

  const onClickUpdate = (): void => {
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
    <tbody key={singleEl.id}>
      <tr key={singleEl.id}>
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
            onClick={() => dispatch(removePassword(singleEl.id))}
          >
            <span className='icon'>
              <i className='fa fa-remove'></i>
            </span>
          </button>
        </td>
        <th>
          <div className='checkbox'>
            <input
              type='checkbox'
              checked={isSelectAll}
              onChange={() => setIsSelectAll(!isSelectAll)}
            />
            <label htmlFor='checkbox'></label>
          </div>
        </th>
      </tr>
    </tbody>
  );
};

export default SingleEl;
