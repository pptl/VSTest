import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppDispatch } from 'Store/store'

type ClassItem = {
   classId: string,
   className: string,
   totalStudents: number,
   classLink: string,
   qrCode: string,
}

type ClassList = ClassItem[] | null

type Student = {
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


export type ClassInfoState = {
   classList: ClassList,
   classListLoading: boolean,
   classInfo: ClassInfo | null,
   classInfoLoading: boolean,
   [key: string]: any;
}

const initialState: ClassInfoState = {
   classList: null,
   classListLoading: false,
   classInfo: null,
   classInfoLoading: false,
}

const classInfoSlice = createSlice({
   name: 'classInfo',
   initialState: initialState,
   reducers: {
      setState: (state, action: PayloadAction<{ key: string, value: any }>) => {
         const { key, value } = action.payload;
         state[key] = value
      },
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
      getClassInfoSuccess: (state, action: PayloadAction<ClassInfo>) => {
         state.classInfo = action.payload
         state.classInfoLoading = false
      },
      getClassInfoFail: (state) => {
         state.classInfoLoading = false
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
      dispatch(getClassInfoSuccess(data[id]));
   } catch (error) {
      dispatch(getClassInfoFail())
      console.error(error);
   }
}

export const {
   setState,
   getClassListStart,
   getClassListSuccess,
   getClassListFail,
   getClassInfoStart,
   getClassInfoSuccess,
   getClassInfoFail,
} = classInfoSlice.actions
export {
   getClassList,
   getClassInfo,
}
export default classInfoSlice.reducer