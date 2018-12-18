
<button type="button" class="btn btn-info btn-lg" id="edit-myLinks-btn">Popup 1</button>
    <div class="modal fade edwards-modal-popup" id="myModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <ul class="nav nav-tabs">
                        <li><a data-toggle="tab" href="#popuptab1" class="active">Customize My Apps</a></li>
                        <li><a data-toggle="tab" href="#myLinks-popuptab2">Customize My Links</a></li>
                    </ul>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="tab-content">
                        <div id="popuptab1" class="tab-pane fade in active popuptab1">
                            <p>Drag and drop apps to be shown here. You can add upto 12 apps</p>
                            <ul class="clearfix edwards-drag-section">
                                <li><a class="drag">skype</a></li>
                                <li><a class="drag">Outlook</a></li>
                                <li><a class="drag">Excel</a></li>
                                <li><a class="drag">Delve</a></li>
                                <li><a class="drag">Locations</a></li>
                                <li><a class="drag">Connect</a></li>
                                <li><a>7</a></li>
                                <li><a>8</a></li>
                                <li><a>9</a></li>
                                <li><a>10</a></li>
                                <li><a>11</a></li>
                                <li><a>12</a></li>
                            </ul>
                            <input type="text" placeholder="Search App">
                            <div class="edwards-popup-sub-tabs">
                                <ul class="nav nav-pills">
                                    <li><a data-toggle="pill" href="#subtab1"  class="active">Connect</a></li>
                                    <li><a data-toggle="pill" href="#subtab2">Communicate</a></li>
                                    <li><a data-toggle="pill" href="#subtab3">Applications</a></li>
                                    <li><a data-toggle="pill" href="#subtab4">Digital Workspace</a></li>
                                    <li><a data-toggle="pill" href="#subtab5">Project Management</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div id="subtab1" class="tab-pane fade in active">
                                        <ul class="clearfix">
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                            <li><a></a>App Name</li>
                                        </ul>
                                    </div>
                                    <div id="subtab2" class="tab-pane fade">
                                        <ul class="clearfix">
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                            <li><a></a>App Name2</li>
                                        </ul>
                                    </div>
                                    <div id="subtab3" class="tab-pane fade">
                                      <h3>Menu 2</h3>
                                      <p>Some content in menu 2.</p>
                                    </div>
                                    <div id="subtab4" class="tab-pane fade">
                                      <h3>Menu 3</h3>
                                      <p>Some content in menu 2.</p>
                                    </div>
                                    <div id="subtab5" class="tab-pane fade">
                                      <h3>Menu 4</h3>
                                      <p>Some content in menu 2.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="myLinks-popuptab2" class="tab-pane fade">
                            <p>Drag and drop apps to be shown here. You can add upto 12 apps</p>
                            <div class="row popuptab2">
                                <div class="col">
                                    <h4>Link 1</h4>
                                    <input type="text" placeholder="Title">
                                    <input type="text" placeholder="URL">
                                </div>
                                <div class="col">
                                    <h4>Link 2</h4>
                                    <input type="text" placeholder="Title">
                                    <input type="text" placeholder="URL">
                                </div>
                            </div>
                            <div class="row popuptab2">
                                <div class="col">
                                    <h4>Link 3</h4>
                                    <input type="text" placeholder="Title">
                                    <input type="text" placeholder="URL">
                                </div>
                                <div class="col">
                                    <h4>Link 4</h4>
                                    <input type="text" placeholder="Title">
                                    <input type="text" placeholder="URL">
                                </div>
                            </div>
                            <div class="row popuptab2">
                                <div class="col">
                                    <h4>Link 5</h4>
                                    <input type="text" placeholder="Title">
                                    <input type="text" placeholder="URL">
                                </div>
                                <div class="col">
                                    <h4>Link 6</h4>
                                    <input type="text" placeholder="My Benefits">
                                    <input type="text" placeholder="URL">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-cancel" data-dismiss="modal">Cancel</button>
                    <button type="button" id="myLinks-save-btn" class="btn btn-save">Save</button>
                </div>
            </div>
        </div>
    </div>
	
	
	

<script type="text/javascript">
	
	/*===  variables ===*/
	var myLinks = {
		clientContext: null,
		oList: null,
		editMode: false,
		responseMsg: '',
		items: [6]
	};
	/*===  variables ===*/	
	 
	 /*=== open modal and select my-links tab ===*/
	 $("#edit-myLinks-btn").click(function() {
		debugger;
		$('#myModal').modal('show');
		$('.nav-tabs a[href="#myLinks-popuptab2"]').tab('show');
		$('#myLinks-popuptab2 div.col').each(function(i, obj) {
			$(this).find('input[type="text"]:first').val('');
			$(this).find('input[type="text"]:last').val('');
		});
		myLinks.retrieveListItems();
	 });
	 /*=== open modal and select my-links tab ===*/
	 
	 /*=== when modal save btn is clicked ===*/
	 $("#myLinks-save-btn").click(function() {
		debugger;
		var tempUpdateItems = [], tempCreateItems = [], errMsg = '';		
		$('#myLinks-popuptab2 div.col').each(function(i, obj) {
				var title = $(this).find('input[type="text"]:first').val();
				var url = $(this).find('input[type="text"]:last').val();
				if(myLinks.items[i]){
					//update
					if(!title || !url){
						errMsg += "Title or URL in Link " + (i+1) + " cannot be empty!\n";
					}
					if(!myLinks.validateUrl(url))
						errMsg += "URL in Link " + (i+1) + " must start with http(s)://\n";
					if(myLinks.items[i].title != title || myLinks.items[i].url != url){
						myLinks.items[i].title = title;
						myLinks.items[i].url = url;
						//myLinks.updateListItem(myLinks.items[i]);
						tempUpdateItems.push(myLinks.items[i]);
					}
				}
				else if(title || url){
					//create
					if(!title || !url){
						errMsg += "Title or URL in Link " + (i+1) + " cannot be empty!\n";
					}
					else if(url && !myLinks.validateUrl(url))
						errMsg += "URL in Link " + (i+1) + " must start with http(s)://\n";
					else{
						var obj = {
							title: title,
							url: url,
							order: (i+1)
						}
						tempCreateItems.push(obj);
					}
						
				}			
		});
		
		if(errMsg){
			alert(errMsg);
			return;
		}
		if(tempUpdateItems.length)
			myLinks.updateMultipleListItems(tempUpdateItems);
			
		if(tempCreateItems.length)
			myLinks.createMultipleListItems(tempCreateItems);
	 });
	/*=== when modal save btn is clicked ===*/	
	
	/*===  helper functions ===*/
	myLinks.validateUrl = function(url){
		var urlPattern = new RegExp('^https?:\/\/.*$');
		return urlPattern.test(url);
	}
	
	myLinks.onQueryFailed = function(sender, args) {
		debugger;
		var customMsg = this.errorMsg? this.errorMsg : '';
		alert(customMsg + args.get_message() + '\n' + args.get_stackTrace());
	}
	/*===  helper functions ===*/
	
	
	
	myLinks.retrieveListItems= function() {
		debugger;
	    myLinks.clientContext = new SP.ClientContext();
		myLinks.oList = myLinks.clientContext.get_web().get_lists().getByTitle('Important Links');
		var camlQuery = new SP.CamlQuery();
		var q = '<View><Query><Where><Eq><FieldRef Name="Author" LookupId="TRUE" /><Value Type="Integer"><UserID /></Value></Eq></Where></Query></View>';
		camlQuery.set_viewXml(q);
		myLinks.collListItem = myLinks.oList.getItems(camlQuery);
		myLinks.clientContext.load(myLinks.collListItem);
		this.errorMsg = "Get list items request failed! "; //this is available in success/error functions called below;
		myLinks.clientContext.executeQueryAsync(Function.createDelegate(this, myLinks.onQuerySucceeded), Function.createDelegate(this, myLinks.onQueryFailed));        
	}
	
	myLinks.onQuerySucceeded = function(sender, args) {
		debugger;
		myLinks.items = [];
		myLinks.items.length = 6;
		var listItemEnumerator = myLinks.collListItem.getEnumerator();	
		while (listItemEnumerator.moveNext()) {
			var oListItem = listItemEnumerator.get_current();
			var item = {
				id: oListItem.get_item('ID'),
				title: oListItem.get_item('Title'),
				url: oListItem.get_item('URL').$1_1,
				order: oListItem.get_item('Order0')
				};
			if(item.order >=1 && item.order <=6 && !myLinks.items[item.order - 1])
				myLinks.items[item.order - 1] = item;
		}
		
		$('#myLinks-popuptab2 div.col').each(function(i, obj) {
			//input[type="text"
			if(myLinks.items[i]){
				$(this).find('input[type="text"]:first').val(myLinks.items[i].title);
				$(this).find('input[type="text"]:last').val(myLinks.items[i].url);
			}	
		});	
	}
	
	//create single item.
	myLinks.createListItem = function(title, url, order){
		var itemCreateInfo = new SP.ListItemCreationInformation();
		myLinks.oListItem = myLinks.oList.addItem(itemCreateInfo);
		myLinks.oListItem.set_item('Title', title);
		myLinks.oListItem.set_item('URL', url);
		myLinks.oListItem.set_item('Order0', order);
		myLinks.oListItem.update();
		myLinks.clientContext.load(myLinks.oListItem);
		this.errorMsg = "Create list item Request failed. ";
		myLinks.clientContext.executeQueryAsync(Function.createDelegate(this, myLinks.onCreateQuerySucceeded), Function.createDelegate(this, myLinks.onQueryFailed));
	}
	
	//create multiple items.
	myLinks.createMultipleListItems = function(items){
		for(var i=0; i<items.length; i++){
			var item = items[i];
			var itemCreateInfo = new SP.ListItemCreationInformation();
			myLinks.oListItem = myLinks.oList.addItem(itemCreateInfo);
			myLinks.oListItem.set_item('Title', item.title);
			myLinks.oListItem.set_item('URL', item.url);
			myLinks.oListItem.set_item('Order0', item.order);
			myLinks.oListItem.update();
			myLinks.clientContext.load(myLinks.oListItem);
			this.errorMsg = "Create list item Request failed. ";
		}
		myLinks.clientContext.executeQueryAsync(Function.createDelegate(this, myLinks.onCreateQuerySucceeded), Function.createDelegate(this, myLinks.onQueryFailed));

	}
	
	 myLinks.onCreateQuerySucceeded = function(sender, args) {
		debugger;
		$('#myModal').modal('hide');
		//alert('item(s) created successfully!');
		//myLinks.resetForm();
		//myLinks.retrieveListItems();
	}
	
	//create single list item.
	myLinks.updateListItem = function(item){
		debugger;
		myLinks.oListItem = myLinks.oList.getItemById(item.id);
		myLinks.oListItem.set_item('Title', item.title);
		myLinks.oListItem.set_item('URL', item.url);
		myLinks.oListItem.update();
		this.errorMsg = "Update list item Request failed. ";
		myLinks.clientContext.executeQueryAsync(Function.createDelegate(this, myLinks.onUpdateQuerySucceeded), Function.createDelegate(this, myLinks.onQueryFailed));
	}
	
	//update multiple list items.
	myLinks.updateMultipleListItems = function(items){
		for(var i=0; i<items.length; i++){
			var item = items[i];
			myLinks.oListItem = myLinks.oList.getItemById(item.id);
			myLinks.oListItem.set_item('Title', item.title);
			myLinks.oListItem.set_item('URL', item.url);
			myLinks.oListItem.update();
			this.errorMsg = "Update list item Request failed. ";
		}
		myLinks.clientContext.executeQueryAsync(Function.createDelegate(this, myLinks.onUpdateQuerySucceeded), Function.createDelegate(this, myLinks.onQueryFailed));

	}
	
	myLinks.onUpdateQuerySucceeded = function(sender, args) {
		debugger;
		alert('Links updated successfully!');
		$('#myModal').modal('hide');
		//myLinks.retrieveListItems();
		//myLinks.resetForm();
	}
	
	myLinks.deleteConfirm = function(id){
		debugger;
		this.oListItem = myLinks.oList.getItemById(id);
		oListItem.deleteObject();
		this.errorMsg = "Delete list item Request failed. ";
		myLinks.clientContext.executeQueryAsync(Function.createDelegate(this, myLinks.onDelQuerySucceeded), Function.createDelegate(this, myLinks.onQueryFailed));
	}
	
	myLinks.onDelQuerySucceeded = function() {
		alert('Item deleted!');
		myLinks.retrieveListItems();
		myLinks.resetForm();
	}
	
</script>