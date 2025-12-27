


///Regiseter


const Register = async(req, res) => {
    const {userName, email, password} = req.body


        try{

        }catch(err){
            console.log(err);
            res.status(500).json({
                success : false,
                message : 'some error occured! Please try again',
            });
        }
}






// Login 

    const login = async(req, res) => {
        const {email, password } = req.body;

        try{

        }catch(err){
            console.log(err)
            res.status(500).json({
                success : false,
                message : 'Please try again later'
            })
        }

    }

