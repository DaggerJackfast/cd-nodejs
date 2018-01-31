const http=require('http');
const API_KEY='ffe4c705';
function get(title, done) {
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`;
    const req=http.get(url, res=>{
        if(res.statusCode!==200){
            done(new Error(`Error: ${res.statusMessage} (${res.statusCode})`));
            res.resume();
            return;
        }
        res.setEncoding('utf-8');

        let body ="";
        res.on('data',data=>body+=data);
        res.on('end',()=>{
            let result;
            console.log('body',body);
            try{
                result=JSON.parse(body);
            }catch(error){
                done(error);
            }
            if(result.Response==="False") return done(new Error('Movie is not found!'));

            done(null, result)
        });
        req.on('error',error=>done(error));
    });
}
module.exports={
    get
};