import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from 'Store/store'

export type ClassItem = {
	classId: string,
	className: string,
	totalStudents: number,
	classLink: string,
	qrCode: string,
}

type ClassList = ClassItem[] | null

export type Student = {
	classNo: number,
	name: string,
	score: number
}

type Group = {
	groupName: string,
	memberNos: number[],
}

type ClassInfo = {
	className: string,
	totalSeats: number,
	totalStudents: number,
	totalGroups: number,
	students: Student[],
	groups: Group[],
}

type ClassInfoObject = { [classId: string]: ClassInfo }
type ShowJoinDialog = ClassItem | boolean
type ShowInfoDialog = ClassInfo | boolean


export type ClassInfoState = {
	classList: ClassList,
	classListLoading: boolean,
	classInfoLoading: boolean,
	showJoinDialog: ShowJoinDialog,
	showInfoDialog: ShowInfoDialog,
}

//loading 是爲了顯示spinner
const initialState: ClassInfoState = {
	classList: null,
	classListLoading: false,
	classInfoLoading: false,
	showJoinDialog: false,
	showInfoDialog: false,
}

const classInfoSlice = createSlice({
	name: 'classInfo',
	initialState: initialState,
	reducers: {
		getClassListStart: (state) => {
			state.classListLoading = true
		},
		getClassListSuccess: (state, action: PayloadAction<ClassList>) => {
			state.classList = action.payload
			state.classListLoading = false
		},
		getClassListFail: (state) => {
			state.classListLoading = false
		},
		getClassInfoStart: (state) => {
			state.classInfoLoading = true
		},
		getClassInfoSuccess: (state) => {
			state.classInfoLoading = false
		},
		getClassInfoFail: (state) => {
			state.classInfoLoading = false
		},
		setShowJoinDialog: (state, action: PayloadAction<ShowJoinDialog>) => {
			state.showJoinDialog = action.payload
		},
		setShowInfoDialog: (state, action: PayloadAction<ShowInfoDialog>) => {
			state.showInfoDialog = action.payload
		},
	}
})


const getClassList = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(getClassListStart())
		const response = await fetch('/src/mockData/classList.json');
		const data: ClassList = await response.json();
		dispatch(getClassListSuccess(data));
	} catch (error) {
		dispatch(getClassListFail())
		console.error(error);
	}
}

const getClassInfo = (id: string) => async (dispatch: AppDispatch) => {
	try {
		dispatch(getClassInfoStart())
		const response = await fetch('/src/mockData/classInfo.json');
		const data: ClassInfoObject = await response.json();
		dispatch(getClassInfoSuccess());
		
		//模擬只抓特定ID的Class Info Object
		dispatch(setShowInfoDialog(data[id]))
	} catch (error) {
		dispatch(getClassInfoFail())
		console.error(error);
	}
}

export const {
	getClassListStart,
	getClassListSuccess,
	getClassListFail,
	getClassInfoStart,
	getClassInfoSuccess,
	getClassInfoFail,
	setShowJoinDialog,
	setShowInfoDialog,
} = classInfoSlice.actions
export {
	getClassList,
	getClassInfo,
}
export default classInfoSlice.reducer