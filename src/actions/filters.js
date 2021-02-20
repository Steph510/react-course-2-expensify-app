//SET TEXT FILTER
export const setTextFilter = (text = '') => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
);

//SORT BY AMOUNT FILTER
export const sortByAmount = () => (
    {
        type: 'SORT_BY_AMOUNT'       
    }
)

//SORT BY AMOUNT FILTER
export const sortByDate = () => (
    {
        type: 'SORT_BY_DATE'       
    }
)

//SET START DATE
export const setStartDate = (startDate) => (
    {
        type: 'SET_START_DATE',
        startDate
    }
)

//SET START DATE
export const setEndDate = (endDate ) => (
    {
        type: 'SET_END_DATE',
        endDate 
    }
)
