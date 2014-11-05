
    <h1>Minecraft Mods</h1>

    <table class="table">
    <tr>
    <td class="go-left"><a href="/mods/edit" class="btn newOne btn-success ng-binding"><i class="icon-plus"></i>   New mod</a>
    <td class="go-right">Filter by modname : <input type="text" ng-model="modfilter">
    </tr>
    </table>

	<div ng-controller='OnbeforesaveCtrl'>
    <table class="table table-striped table-bordered table-condensed" >
    <tr>
    <td>Modname</td>
    <td>Modversion</td>
    <td>author_url</td>
    <td>forum_url</td>
    <td>download_url</td>
    <td>dependencies</td>
    <td>modtype</td>
    <td>lastchecked</td>
    <td>modupdated</td>
    <td>delete</td>
	</tr>
    	
    <tr ng-repeat="mod in mods | orderBy: 'modname' | filter : { modname: modfilter } ">
    	<td nowrap>	<a class="editable" href="#" editable-text="mod.modname" onbeforesave="saveMod(mod)">{{ mod.modname || "" }}</a></td>
    	<td nowrap>	<a href="#" editable-text="mod.modversion" onbeforesave="saveMod(mod)">{{ mod.modversion || "" }}</a></td>
		<td>		<a href="#" editable-text="mod.author_url" onbeforesave="saveMod(mod)">{{ "Author"}}</a><span ng-if="mod.author_url!=''">&nbsp;<a href={{mod.author_url}}><i class="icon-share-alt"></i></a></span></td>
		<td>		<a href="#" editable-text="mod.forum_url" onbeforesave="saveMod(mod)">{{ "Forum"}}</a><span ng-if="mod.forum_url!=''">&nbsp;<a href={{mod.forum_url}}><i class="icon-share-alt"></i></a></span></td>
		<td>		<a href="#" editable-text="mod.download_url" onbeforesave="saveMod(mod)">{{ "Download"}}</a><span ng-if="mod.download_url!=''">&nbsp;<a href={{mod.download_url}}><i class="icon-share-alt"></i></a></span></td>
    	<td>		<a href="#" editable-text="mod.dependencies" onbeforesave="saveMod(mod)">{{ mod.dependencies || "none"}}</a></td>
    	<td>		<a href="#" editable-text="mod.modtype" onbeforesave="saveMod(mod)">{{ mod.modtype }}</a></td>		
		<td nowrap>	<a href="#" editable-datetime='mod.lastchecked'><span am-time-ago='mod.lastchecked'></span></a></td>
    	<td>		<a href="#" editable-checkbox="mod.modupdate" e-title="updated?" onbeforesave="saveMod(mod)">{{ mod.modupdate && "Yes" || "No" }}</a></td>	
    	<td>		<button type="button" class="btn btn-danger" ng-click="removeMod(mod)">Delete</button></td>
    </tr>
    
	</table>
	</div>

