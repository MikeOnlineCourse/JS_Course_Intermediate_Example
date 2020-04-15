window.onload = function(){

    var headerDOM = document.getElementById('header')
    var footerDOM = document.getElementById('footer')
    
    function getHeader() {
        return axios.get('./components/header.html');
    }
    function getFooter() {
        return axios.get('./components/footer.html');
    }

    axios.all([getHeader(), getFooter()]).then(axios.spread(function (header, footer) {
        headerDOM.innerHTML = header.data;
        footerDOM.innerHTML = footer.data;
    }));

}