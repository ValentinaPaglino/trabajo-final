import React from 'react';
import { Pagination } from '@mui/material';

const Paginado = ({ page, totalPages, onPageChange }) => {
    return (
        <div>
            <Pagination 
                count={totalPages} 
                page={page} 
                onChange={onPageChange} 
                color="primary" 
                showFirstButton 
                showLastButton 
            />
        </div>
    );
};

export default Paginado;
