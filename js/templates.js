var calendersSelectListOption = "<option value='${url}'>${title}</option>";
$.template( "calendersSelectListOption", calendersSelectListOption);

var rangeSelectList = "<select name='rangeList' id='rangeList'><option value='today'>Today</option><option value='week'>This week</option><option value='month'>This month</option><option value='year'>This yeah</option><option value='total'>Total</option></select>";
$.template( "rangeSelectList", rangeSelectList);

var rangeChangeBtns = '<a href="" id="prev" class="btn rangeside{{if disableBtns}} disabled{{/if}}">PREV</a> <a href="" id="reset" class="btn rangecenter{{if disableBtns}} disabled{{/if}}">RESET ${to}</a> <a href="" id="next" class="btn rangeside{{if disableBtns}} disabled{{/if}}">NEXT</a>';
$.template( "rangeChangeBtns", rangeChangeBtns);