import React from 'react';
import { useDispatch } from 'react-redux';

import { removePassword } from '../redux/password/passwordActions';

const SingleEl = ({ singleEl, i }) => {
  const dispatch = useDispatch();

  return (
    <tbody key={singleEl}>
      <tr key={singleEl.id}>
        <td>{i + 1}</td>
        <td>{singleEl.passwordName}</td>
        <td>{singleEl.password}</td>
        <td className='action'>
          <button className='btn-edit'>
            <span className='icon'>
              <i className='fa fa-pencil'></i>
            </span>
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
