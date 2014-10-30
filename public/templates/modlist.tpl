
    <h1>Minecraft Mods</h1>

    <table class="table">
    <tr>
    <td class="go-left"><a href="/mods/edit" class="btn newOne btn-success ng-binding"><i class="icon-plus"></i>   New mod</a>
    <td class="go-right">Filter by modname : <input type="text" ng-model="modfilter">
    </tr>
    </table>


    <table class="table table-striped table-bordered table-condensed" >
    <tr>
    <td>Modid</td>
    <td>Modname</td>
    <td>Modversion</td>
    <td>author_url</td>
    <td>forum_url</td>
    <td>download_url</td>
    <td>dependencies</td>
    <td>modtype</td>
    <td>lastchecked</td>
    <td>modupdated</td>
    <td>edit</td>
    <td>delete</td>
	</tr>
    
    <tr ng-repeat="mod in mods | orderBy: 'modname' | filter : { modname: modfilter } ">

    	<td>{{ mod.modid }}</td>
    	<td nowrap>{{ mod.modname }}</td>
    	<td nowrap>{{ mod.modversion }}</td>
    	<td><a ng-if="mod.author_url!=''" href='{{ mod.author_url }}'>Author</a></td>
    	<td><a ng-if="mod.forum_url!=''" href='{{ mod.forum_url }}'>Forum</a></td>
    	<td><a ng-if="mod.download_url!=''" href='{{ mod.download_url }}'>Download</a></td>
    	<td>{{ mod.dependencies }}</td>
    	<td>{{ mod.modtype }}</td>
    	<td nowrap><span am-time-ago="mod.lastchecked"></span></td>
    	<td>{{ mod.modupdate }}</td>
    	<td><button type="button" class="btn btn-info" ng-click="updateMod(mod)">Edit</button></td>
    	<td><button type="button" class="btn btn-danger" ng-click="removeMod(mod)">Delete</button></td>

    </tr>
    
	</table>

