<div class="container">
    <form id="loginform" class="form-login" role="form">

        <h1 class="list-heading">{{ function }} mod</h1>

        <input type="text" class="form-control margin10" placeholder="ModName" autofocus id="addedit-modname" ng-model="addedit.modname">
        <input type="text" class="form-control margin10" placeholder="Modversion" id="addedit-modversion" ng-model="addedit.modversion">
        <input type="url" class="form-control margin10" placeholder="Author URL" id="addedit-author_url" ng-model="addedit.author_url">
        <input type="url" class="form-control margin10" placeholder="Forum URL" id="addedit-forum_url" ng-model="addedit.forum_url">
        <input type="url" class="form-control margin10" placeholder="Download URL" id="addedit-download_url" ng-model="addedit.download_url">
        <input type="text" class="form-control margin10" placeholder="Dependencies" id="addedit-dependencies" ng-model="addedit.dependencies">
        <input type="text" class="form-control margin10" placeholder="ModType"  id="addedit-modtype" ng-model="addedit.modtype" type="text">
        <input type="text" class="form-control margin10" placeholder="LastChecked" id="addedit-lastchecked" ng-model="addedit.lastchecked">
        ModUpdated: <input type="checkbox" placeholder="ModUpdated" id="addedit-modupdated" ng-model="addedit.modupdate">

        <button class="btn btn-success btn-block" ng-click="saveMod()">Save</button>
        <a href="/mods" class="btn btn-success btn-block">Cancel</a>
    </form>
</div>