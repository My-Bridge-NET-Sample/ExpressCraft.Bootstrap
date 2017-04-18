﻿using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class NavbarCollapseButton : BootWidgetClickBase
	{
		public NavbarCollapseButton(string _id) : base(new HTMLButtonElement() { Type = ButtonType.Button, ClassName = "navbar-toggle collapsed" })
		{
			if(!string.IsNullOrWhiteSpace(_id) && !_id.StartsWith("#"))
			{
				_id = "#" + _id;
			}
			AppendTypos(this, new SourceOnly("Toggle navigation"), new IconBar(), new IconBar(), new IconBar());
			SetAttribute("data-toggle", "collapse");
			SetAttribute("data-target", _id);
			
			SetAttribute("aria-expanded", "false");
		}
	}
}
