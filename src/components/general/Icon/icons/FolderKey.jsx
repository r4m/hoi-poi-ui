import React from 'react';

const FolderKey = ({ color = '#788590', ...props }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4 4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12L10 4H4ZM11 10C12.31 10 13.42 10.84 13.83 12H19V14H18V16H16V14H13.83C13.42 15.17 12.31 16 11 16C10.2044 16 9.44129 15.6839 8.87868 15.1213C8.31607 14.5587 8 13.7956 8 13C8 12.2044 8.31607 11.4413 8.87868 10.8787C9.44129 10.3161 10.2044 10 11 10V10ZM11 12C10.7348 12 10.4804 12.1054 10.2929 12.2929C10.1054 12.4804 10 12.7348 10 13C10 13.56 10.45 14 11 14C11.2652 14 11.5196 13.8946 11.7071 13.7071C11.8946 13.5196 12 13.2652 12 13C12 12.7348 11.8946 12.4804 11.7071 12.2929C11.5196 12.1054 11.2652 12 11 12Z"
            fill={color}
        />
    </svg>
);

export default React.memo(FolderKey);
