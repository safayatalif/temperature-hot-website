let  API_key = `8ffd30c87d79821ea6301395c778dce3`
const loadData = (city_name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data))
}
const showData = data =>{
    getIdSetValue('temp' ,data.main.temp );
    getIdSetValue('city-name', data.name);
    getIdSetValue('lead-value',data.weather[0].main);
}
document.getElementById('search-btn').addEventListener('click',function(){
    const searchValue = document.getElementById('search-field').value ;
    loadData(searchValue);
})
const getIdSetValue = (id , value ) =>{
    document.getElementById(id).innerText= value;
}
loadData('dhaka')