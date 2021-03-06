﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;

namespace ExpressCraft.Bootstrap
{
	public class BootForm : BootWidget
	{
		public BootForm(BootFormType formType = BootFormType.None, params Union<string, Control, HTMLElement>[] typos) : base(new HTMLFormElement())
		{			
			if(formType != BootFormType.None)
				Content.ClassName = "form-" + formType.ToString("G").ToLower();
			FormGroup.AppendGroupList(this, typos);			
		}

		public bool Navbar
		{
			get { return GetClassTrue("navbar-form"); }
			set
			{
				SetClassTrue("navbar-form", value);
			}
		}
	}
}
