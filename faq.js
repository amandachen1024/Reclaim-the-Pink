function dropdownToggle(btn)
{
    let panel = btn.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        btn.style.borderRadius="10px";
      } else {
        panel.style.display = "block";
        btn.style.borderBottomRightRadius="0px";
        btn.style.borderBottomLeftRadius="0px"
      }
}