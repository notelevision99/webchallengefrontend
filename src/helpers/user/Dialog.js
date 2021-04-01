import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';
import CartPage from '../../pages/CartPage';

export default function DraggableDialog({ open, handleClose, submit }) {
    return (
        <div>
            <Dialog
                className='dialog'
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'>
                <DialogTitle className='dialog-title' id='alert-dialog-title'>
                    {'Thông báo'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className='dialog-description' id='alert-dialog-description'>
                        Bạn chưa đăng nhập tài khoản. Tiếp tục đăng nhập?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className='dialog-button' onClick={handleClose} color='primary'>
                        Từ chối
                    </Button>
                    <Button className='dialog-button' onClick={submit} color='primary' autoFocus>
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
