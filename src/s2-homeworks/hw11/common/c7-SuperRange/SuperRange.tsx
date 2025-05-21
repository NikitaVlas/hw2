import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#40e119',
                height: 40, // высота всего слайдера (делаем побольше, чтобы ползунок не выходил за пределы)
                padding: '12px 0',

                '& .MuiSlider-rail': {
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#7c7c7c',
                    opacity: 0.5,
                },
                '& .MuiSlider-track': {
                    height: 8,
                    borderRadius: 4,
                },
                '& .MuiSlider-thumb': {
                    height: 28,
                    width: 28,
                    backgroundColor: '#fff',
                    border: '3px solid #4caf50',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: 12,
                        width: 12,
                        borderRadius: '50%',
                        backgroundColor: '#4caf50',
                    },
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(76, 175, 80, 0.16)',
                    },
                    '&.Mui-active': {
                        boxShadow: '0 0 0 14px rgba(76, 175, 80, 0.3)',
                    },
                    '&.Mui-focusVisible': {
                        boxShadow: '0 0 0 14px rgba(76, 175, 80, 0.3)',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
