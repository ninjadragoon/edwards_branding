var options = {
    OnPreRender: function() { 
        console.log('CSR OnPreRender');
    },
    OnPostRender: [
        function() { console.log('CSR OnPostRender1'); },
        //function() { console.log('CSR OnPostRender2'); }
    ],
    Templates: {
        Header: " ", 
        Footer: renderFooter,
        Body: renderCustomTable
    }
};

function renderFooter(ctx){
    /* 
       Renders pagination controls.
       Note: To limit number of items displayed, create a view, edit it, and change the limit.
       Now edit the list app part on your custom page, and select the newly created view. 
    */
    var firstRow = ctx.ListData.FirstRow;
        var lastRow = ctx.ListData.LastRow;
        var prev = ctx.ListData.PrevHref;
        var next = ctx.ListData.NextHref;
        var html = "<div class='Paging container'>";
        html += prev ? "<a style='box-sizing: content-box;' class='ms-commandLink ms-promlink-button ms-promlink-button-enabled' href='" + prev + "'><span class='ms-promlink-button-image'><img class='ms-promlink-button-left' src='/_layouts/15/images/spcommon.png?rev=23' /></span></a>" : "";
        html += "<span class='ms-paging'><span class='First'>" + firstRow + "</span> - <span class='Last'>" + lastRow + "</span></span>";
        html += next ? "<a style='box-sizing: content-box;' class='ms-commandLink ms-promlink-button ms-promlink-button-enabled' href='" + next + "'><span class='ms-promlink-button-image'><img class='ms-promlink-button-right' src='/_layouts/15/images/spcommon.png?rev=23'/></span></a>" : "";
        html += "</div>";
        return html;
}


function renderCustomTable(ctx){
    debugger;
    var imageNotFound = "/_catalogs/masterpage/OneEdwards/images/image-not-available.jpg";
    var html = '<div class="nws-list-bx row py-xl-4 px-xl-5 p-3">';
    html += '<div class="col p-0">';
    //==============header==========
    html += '<div class="add-nw-bx mb-4"><h5>News</h5><a href="/Lists/News/NewForm.aspx" target="_blank" class="text-decoration-none text-dark"><i class="fas fa-plus"></i> Add</a></div>';
    //==============end header==========
    html  += '<ul class="list-unstyled">';
    var items = ctx.ListData.Row;
    if(items){
        for(var i=0; i<items.length; i++){
            var item = items[i];
            html += '<li class="media row border-bottom mb-3">';
            html += '<figure class="figure nws-lst-img col-lg-3">';
            html += '<a href="' + item.Url + '" target="_blank" class=" banner d-block text-center" style="background-image: url('+ (item.ImageUrl ? item.ImageUrl : imageNotFound) +');"></a>';
            html += '</figure>';
            html += '<div class="media-body col-lg-9">';

            //=========== News Category Array ===========
            if(item.Category && item.Category.length){
                var catHtml = '<h6><small>';
                for(var j=0; j<item.Category.length; j++){
                    var cat = item.Category[j];
                    catHtml += cat;
                    if(j != item.Category.length - 1)
                        catHtml += ' / ';
                }
                catHtml += '</small></h6>';
                html += catHtml;
            }
            //=========== End News Category Array ===========

            html += '<h5 class="mt-0 mb-1"><a href="' + item.Url + '" target="_blank" class="text-decoration-none text-dark">' + item.Title + '</a></h5>';
            html += '<p>' + item.Description + '</p>';
            html += '</div>';
            html += '</li>';
        }
    }
    html += '</ul></div></div>'
    return html;
}

//starting point
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(options);