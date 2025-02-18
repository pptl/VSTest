import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ClassItem = {
   classId: string,
   className: string,
   totalStudents: number,
   classLink: string,
   qrCode: string,
}

export type ClassInfoState = {
   classList: ClassItem[] | null,
   [key: string]: any;
}

const initialState: ClassInfoState = {
   classList: null,
}

const classInfoSlice = createSlice({
   name: 'classInfo',
   initialState: initialState,
   reducers: {


      setState: (state, action: PayloadAction<{ key: string, value: any }>) => {
         const { key, value } = action.payload;
         state[key] = value
      }
   }
})

export const { setState } = classInfoSlice.actions
export default classInfoSlice.reducer