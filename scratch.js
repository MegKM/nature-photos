<p>Tags:</p>
<% tags.forEach(function(t){ %>
    <%= t %>
<% }); %>


<select name="tag-list">
    <% tags.forEach(function(description){ %>
        <option value="<%= description%>"><%= description%></select>
    <% }); %>
</select>
