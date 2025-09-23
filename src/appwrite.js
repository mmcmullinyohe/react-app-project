const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const METRICS_ID = import.meta.env.VITE_APPWRITE_METRICS_ID;


export const updateSearchCount = async () => {
 console.log(PROJECT_ID, DATABASE_ID, METRICS_ID);   
}