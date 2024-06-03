import React from 'react'
import StepperComponent from '../StepperComponent/StepperComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container } from '@mui/material';
import { setPageNumber } from '../../Context/PageSlice';
import DisplayPage from '../DisplayPage/DisplayPage';

function Layout() {
    const currentPage = useSelector((state) => state.PageSlice.pageNumber)
    const totalPages = useSelector((state) => state.PageSlice.totalPages)
    
    const dispatch = useDispatch()

    const handleShowNextPage = () => {
        dispatch(setPageNumber(currentPage + 1));
    }
    
    const handleShowPrevPage = () => {
        dispatch(setPageNumber(currentPage - 1));
    }

    const handleDataSubmit = () => {

    }

  return (
    <div className='flex flex-col gap-4 justify-between h-dvh bg-black text-white tablet:p-0 py-2' style={{border : "2px solid red"}}>
        <StepperComponent/>

        <DisplayPage/>

        <Container style={{border :"2px solid green"}} className=" py-4">
            <div className='flex gap-4 justify-center'>
            <Button variant='contained' onClick={handleShowPrevPage} disabled={currentPage == 0 }>PREV</Button>
            <Button variant='contained' type='submit' onClick={currentPage == totalPages - 1 ? handleDataSubmit : handleShowNextPage}>{currentPage == totalPages - 1 ? "SUBMIT" : "NEXT"}</Button>
            </div>
        </Container>
    </div>
  )
}

export default Layout