const initialState = {isAuthenticated: false,
                      username: '',
                      id: '',
                      bookmarks: []}

const reducer = (state = initialState, action) =>
{
    switch(action.type) 
    {
        case 'USER_LOGIN':
          return {...state, 
            isAuthenticated: action.value,
            id: action.id
          }
    }
    return state
}

export default reducer