function setUp() {

    async function fetchTest(){
        let myUrl = 'Data/FisheyeData.json';
        return await fetch(myUrl , {method : "GET"})
        .then(data => {
            return data.json()
        }).then(datas =>{
            console.log(datas)
            datas;
        });
    }


    return {
        fetchTest
    }
}