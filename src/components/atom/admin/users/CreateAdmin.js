import React from 'react'
import axios from "axios";
import { API_URL } from "../../../../helpers/admin/urlCallAxios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '../../../layout/admin/Menu';
import Header from '../../../layout/admin/Header';
import Footer from '../../../layout/admin/Footer';
import { Redirect } from 'react-router-dom';
export default class CreateAdmin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            /**User Info */
            userName: '',
            password: '',
            email: '',
            phoneNumber: '',
            /**End User Info */
            redirect: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangUserName = this.handleChangUserName.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this)
    }

    handleChangUserName(e) {
        e.preventDefault();
        this.setState({
            userName: e.target.value
        })
    }

    handleChangePassword(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }

    handleChangePhoneNumber(e) {
        e.preventDefault();
        this.setState({
            phoneNumber: e.target.value
        })
    }

    handleChangeEmail(e) {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }

    onCreateUser = () => {
        const user = {
            userName: this.state.userName,
            passWord: this.state.password,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        }
        const urlToCreateUser = `${API_URL}/api/auth/register`
        axios.post(urlToCreateUser, user, { withCredentials: true })
            .then(() => {
                this.setState({
                    redirect: true
                })
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        try {
            this.onCreateUser()
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
                <ToastContainer />
                <Header />
                <Menu />
                {
                    this.state.redirect && <Redirect to='/admin/users' />
                }
                <div className='content-wrapper' style={{ minHeight: '700px' }}>
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Th??m t??i kho???n</h1>
                                </div>

                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    <div>
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Th??m t??i kho???n qu???n tr???</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <form role="form" onSubmit={this.handleSubmit}>
                                    <div className='d-flex flex-row bd-highlight mb-3'>
                                        <div className='col-md-6'>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">T??n t??i kho???n</label>
                                                    <input
                                                        value={this.state.userName}
                                                        onChange={this.handleChangUserName}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Nh???p t??n t??i kho???n" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6' >
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">M???t kh???u</label>
                                                    <input
                                                        value={this.state.password}
                                                        onChange={this.handleChangePassword}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Nh???p m???t kh???u" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row bd-highlight mb-3'>
                                        <div className='col-md-6' >
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">?????a ch??? email</label>
                                                    <input
                                                        value={this.state.email}
                                                        onChange={this.handleChangeEmail}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Nh???p ?????a ch??? email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6' >
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">S??? ??i???n tho???i</label>
                                                    <input
                                                        value={this.state.phoneNumber}
                                                        onChange={this.handleChangePhoneNumber}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Nh???p s??? ??i???n tho???i" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">X??c nh???n</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </>
        )
    }
}
