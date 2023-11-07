<p>Tags:</p>
<% tags.forEach(function(t){ %>
    <%= t %>
<% }); %>


<select name="tag-list">
    <% tags.forEach(function(description){ %>
        <option value="<%= description%>"><%= description%></select>
    <% }); %>
</select>

 <% if(currentTags){ %> 
<label>Current tags:</label>
<% currentTags.forEach(function(t){ %>
    <ul>
        <li><%= t%></li>
    </ul>
<% }) %> 
<% } %>

<% if(currentTags){ %> 
    <label>Current tags:</label>
    <% currentTags.forEach(function(t){ %>
        <ul>
            <li><%= t%></li>
        </ul>
    <% }) %> 
    <% } %>

    <%- tags.map(t => 
        `<option value ="${t._id}">${t.description}</option>)`
        ).join('') %>


        <% if(currentTags.images.includes(image._id) === false){ %>
            <% }) %>