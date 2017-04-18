﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class Navbar : BootWidget
	{
		public Navbar(params Union<string, Control, HTMLElement>[] typos) : base(Document.CreateElement("nav"))
		{
			Content.ClassName = "navbar navbar-default";

			var container = (new BootStyleWidget("container-fluid"));
			
			AppendTypos(container, typos);

			Content.AppendChild(container);
		}

		public NavBarTheme Theme
		{
			get
			{
				return GetEnumClassValue(typeof(NavBarTheme)).As<NavBarTheme>();
			}
			set { SetEnumClassValue(typeof(NavBarTheme), value.ToString("G").ToLower().Replace("_", "-")); }
		}

		public NavBarLocation NavbarLocation
		{
			get
			{
				var x = GetEnumClassValue("navbar-", typeof(NavBarLocation)).As<Enum>();
				if(x == null)
					return NavBarLocation.None;
				else
					return x.As<NavBarLocation>();
			}
			set
			{
				if(value == NavBarLocation.None)
				{
					ClearEnumClassValue("navbar-", typeof(NavBarLocation));
				}
				else
				{
					SetEnumClassValue("navbar-", typeof(NavBarLocation), value.ToString("G").ToLower().Replace("_", "-"));
				}
			}
		}
	}
}