const initialState = {}

export default function reducer ( state = 1, action = {} ) {
	switch ( action.type ) {
		case 'CHANGE_ITEM':
			return console.log("item changed")
      
		default: return state
	}
}
