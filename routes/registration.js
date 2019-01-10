const express = require('express');
const router = express.Router();
const config = require('../config/env');
const User = require('../models/user');
var nodemailer = require("nodemailer");
var ObjectId = require('mongoose').Types.ObjectId;
//Fill up mail details and proceed
let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "saravind23399@gmail.com",
        pass: "Aravindiam29#"
    }
});

//Create Registration User
router.post('/create', (req, res, next) => {

    let newUser = new User({
        name: req.body.name,
        college_id: req.body.college_id,
        department_id: req.body.department_id,
        degree_id: req.body.degree_id,
        email_id: req.body.email_id,
        year_id: req.body.year_id,
        gender: req.body.gender,
        mobile_number: req.body.mobile_number,
        confirmed: false,
        activated: req.body.activated,
        type: req.body.type,
        password: req.body.password,
        registration_mode: req.body.registration_mode,
        gmID: '',
        cart_paid: false
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register user' + err
            });
        } else {
            User.activationCode(newUser, (err2, activationUser) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'Failed to add activtion Code to user' + err2
                    });
                } else {
                    link = "http://www.gyanmitra19.mepcoeng.ac.in/user/" + "activate/" + activationUser._id + "/" + activationUser.activation_code;
                    let mailOptions = {
                        to: req.body.email_id,
                        subject: "Please confirm your Email account",
                        html: ' <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">  <head>   <meta charset="UTF-8">   <meta content="width=device-width, initial-scale=1" name="viewport">   <meta name="x-apple-disable-message-reformatting">   <meta http-equiv="X-UA-Compatible" content="IE=edge">   <meta content="telephone=no" name="format-detection">   <title>gyanmitra</title>   <!--[if (mso 16)]>     <style type="text/css">     a {text-decoration: none;}     </style>     <![endif]-->   <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->   <!--[if !mso]><!-- -->   <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">   <!--<![endif]-->   <style type="text/css"> @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } .es-button { font-size:20px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } } #outlook a { 	padding:0; } .ExternalClass { 	width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { 	line-height:100%; } .es-button { 	mso-style-priority:100!important; 	text-decoration:none!important; } a[x-apple-data-detectors] { 	color:inherit!important; 	text-decoration:none!important; 	font-size:inherit!important; 	font-family:inherit!important; 	font-weight:inherit!important; 	line-height:inherit!important; } .es-desk-hidden { 	display:none; 	float:left; 	overflow:hidden; 	width:0; 	max-height:0; 	line-height:0; 	mso-hide:all; } </style>  </head>  <body style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">   <div class="es-wrapper-color" style="background-color:#F6F6F6;">    <!--[if gte mso 9]> 			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> 				<v:fill type="tile" color="#f6f6f6"></v:fill> 			</v:background> 		<![endif]-->    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">      <tr style="border-collapse:collapse;">       <td valign="top" style="padding:0;Margin:0;">        <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">          <tr style="border-collapse:collapse;">           <td style="padding:0;Margin:0;background-image:url(https://tlr.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/9701519718227204.jpg);background-position:center top;background-repeat:no-repeat;background-size:cover;" bgcolor="#3d4c6b" align="center">            <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="640" cellspacing="0" cellpadding="0" align="center">              <tr style="border-collapse:collapse;">               <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;">                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                  <tr style="border-collapse:collapse;">                   <td width="600" valign="top" align="center" style="padding:0;Margin:0;">                    <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                      <tr style="border-collapse:collapse;">                       <td align="center" style="padding:0;Margin:0;padding-top:10px;"> <img class="adapt-img" src="https://nlgbl.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/17611519723274581.png" alt="Newsletter article #1" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;border-radius:3px 3px 0px 0px;" title="Newsletter article #1" width="600"></td>                      </tr>                    </table> </td>                  </tr>                </table> </td>              </tr>            </table> </td>          </tr>        </table>        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">          <tr style="border-collapse:collapse;">           <td align="center" style="padding:0;Margin:0;">            <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="640" cellspacing="0" cellpadding="0" align="center">              <tr style="border-collapse:collapse;">               <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px;">                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                  <tr style="border-collapse:collapse;">                   <td width="600" valign="top" align="center" style="padding:0;Margin:0;">                    <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:3px;background-color:#FFFFFF;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">                      <tr style="border-collapse:collapse;">                       <td align="center" style="Margin:0;padding-bottom:5px;padding-left:20px;padding-right:20px;padding-top:25px;"> <h2 style="Margin:0;line-height:34px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:28px;font-style:normal;font-weight:bold;color:#444444;">GYANMITRA'19</h2> </td>                      </tr>                      <tr style="border-collapse:collapse;">                       <td align="center" style="Margin:0;padding-top:10px;padding-bottom:15px;padding-left:20px;padding-right:20px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#999999;">Confirm your email address by clicking the button below</p> </td>                      </tr>                      <tr style="border-collapse:collapse;">                       <td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:25px;"> <span class="es-button-border" style="border-style:solid;border-color:#75B6C9;background:#75B6C9;border-width:1px;display:inline-block;border-radius:28px;width:auto;"> <a href=' + link + ' class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:16px;color:#FFFFFF;border-style:solid;border-color:#75B6C9;border-width:15px 25px 15px 25px;display:inline-block;background:#75B6C9;border-radius:28px;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;">CONFIRM YOUR EMAIL ADDRESS</a> </span> </td>                      </tr>                    </table> </td>                  </tr>                </table> </td>              </tr>            </table> </td>          </tr>        </table>        <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;">          <tr style="border-collapse:collapse;">           <td align="center" style="padding:0;Margin:0;">            <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F6F6F6;" width="640" cellspacing="0" cellpadding="0" bgcolor="#f6f6f6" align="center">              <tr style="border-collapse:collapse;">               <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;">                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                  <tr style="border-collapse:collapse;">                   <td width="600" valign="top" align="center" style="padding:0;Margin:0;">                    <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                      <tr style="border-collapse:collapse;">                       <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;">                        <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                          <tr style="border-collapse:collapse;">                           <td style="padding:0;Margin:0px;border-bottom:1px solid #F6F6F6;background:rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height:1px;width:100%;margin:0px;"></td>                          </tr>                        </table> </td>                      </tr>                    </table> </td>                  </tr>                </table> </td>              </tr>            </table> </td>          </tr>        </table>        <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;">          <tr style="border-collapse:collapse;">           <td align="center" style="padding:0;Margin:0;">            <table class="es-footer-body" width="640" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#F6F6F6;">              <tr style="border-collapse:collapse;">               <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px;">                <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                  <tr style="border-collapse:collapse;">                   <td width="600" valign="top" align="center" style="padding:0;Margin:0;">                    <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">                      <tr style="border-collapse:collapse;">                       <td align="center" style="padding:0;Margin:0;padding-bottom:5px;"> <img src="https://nlgbl.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/55891519718168286.png" alt="Logo" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" title="Logo" width="35"></td>                      </tr>                      <tr style="border-collapse:collapse;">                       <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;">MEPCO SCHLENK ENGINEERING COLLEGE<br></p> </td>                      </tr>                      <tr style="border-collapse:collapse;">                       <td align="center" style="padding:0;Margin:0;"> <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#999999;">If you didn't create a Gyanmitra account, just delete this email and everything will go back to the way it was.</p> </td>                      </tr>                    </table> </td>                  </tr>                </table> </td>              </tr>            </table> </td>          </tr>        </table> </td>      </tr>    </table>   </div>   </body> </html>';
                    }
                    smtpTransport.sendMail(mailOptions, function (error, response) {
                        if (error) {
                            res.json({
                                success: false,
                                msg: 'Failed to register user' + error
                            });
                        } else {
                            res.json({
                                success: true,
                                msg: 'User Registered Activation Mail has been sent'
                            });
                        }
                    });
                }
            })
        }
    });
});

router.post('/activate', function (req, res, next) {
    const user_id = req.body._id;
    const activation_code = req.body.activation_code;
    if (!ObjectId.isValid(user_id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${user_id}`);

    User.findById(user_id, (err, user) => {
        if (err) throw err;
        if (user.activated) {
            res.json({
                success: true,
                msg: 'Your Already Activated'
            });
        } else {
            if (user.activation_code == activation_code) {
                user.activated = true;
                var  id = user._id.toString();
                user.gmID = 'GM19_' + id.substring(id.length - 8, id.length);
                user.save(function (err, newUser) {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Not Updated'
                        });
                    } else {
                        res.json({
                            success: false,
                            msg: 'Activated ThankYou!!'
                        });
                    }
                })
            }
        }


    });
});
//Read Registered User
router.get('/', function (req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    User.find({
        type: 'user'
    }).limit(config.pagination.perPage).skip(page).exec((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.send(err);
        }
    });
});

router.get('/hasConfirmed/:id', function (req, res, next) {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    User.findById(req.params.id, (err, user) => {
        if (err) throw err;
        if (user.cart_confirmed) {
            res.json({
                error: true,
                data: user,
                msg:"Confirmed"
            })
        }
    })
})

module.exports = router;