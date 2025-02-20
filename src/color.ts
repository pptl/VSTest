interface ThemeType {
  colors: {
    lightGrey: string;
    grey: string;
    hardGrey: string;
    blue: string;
    green:string;
    red:string;
  };
}

export const defaultTheme: ThemeType = {
  colors: {
    lightGrey:'#F5F5F5',
    grey:'#CCCCCC',
    hardGrey:'#666666',
    blue:'#2196f3',
    green:'#43A047',
    red:'#E53935',
  },
};

export default defaultTheme;
