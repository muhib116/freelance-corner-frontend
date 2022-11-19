export default function useWorkingProcess(){
    const handleActiveTab = (data, index) => 
    {
        data.map((item, innerIndex) => {
            return item.isActive = (innerIndex == index)
        })
    }
    return {
        handleActiveTab
    }
}