
<div class="container" >
    <form id="loginform" ng-submit="doLogin()" class="form-login" role="form" ng-if="!user">
        <h1 class="list-heading">Mod login</h1>

        <input class="form-control" placeholder="Email address"  autofocus id="login-email" ng-model="login.username" type="email" >
        <input class="form-control" placeholder="Password"  id="login-password" ng-model="login.password"  type="password">
        <button class="btn btn-success btn-block"  type="submit">Log In</button>
        <button class="btn btn-success btn-block"  type="button" ng-click="adminLogin()">Log In as Demo Admin</button>
    </form>
    
    <div ng-if="user">
    	<h2>
    		Welcome, {{ user.email }}
    	</h2>
    	
    </div>
</div>
