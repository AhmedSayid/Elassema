import './contact.css'
const Contact = () => {
    {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <h1>contact us</h1>
                    </div>
                    <div className="row">
                        <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
                    </div>
                    <div className="row input-container">
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="text" required />
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input">
                                <input type="text" required />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="styled-input" style={{ float: 'right' }}>
                                <input type="text" required />
                                <label>Phone Number</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <textarea required defaultValue={""} />
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="btn-lrg submit-btn" onClick={send}>Send Message</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const send =()=>{(
    fetch('https://elassema.herokuapp.com/sendNewContact',{
        method:'POST',
        const body = {Email:'teast@gmail.com',Massage:'hello world',Name:'Ahmed',Phone:'01028887119'};
        const Mybody = JSON.stringify(obj);
       /*  */
    }).then((res)=>{return res.json()}).then((data)=>{
        // if success
        console.log(data)
    })

)}
export default Contact;