export default function useWorkingProcess(){
    const handleActiveTab = (data, index) => 
    {
        data.map((item, innerIndex) => {
            if(innerIndex == index){
                return item.isActive = true
            }else{
                return item.isActive = false
            }
        })
    }
    return {
        handleActiveTab
    }
}