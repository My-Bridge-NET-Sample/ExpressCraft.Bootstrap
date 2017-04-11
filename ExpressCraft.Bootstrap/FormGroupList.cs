﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge;
using Bridge.Html5;
using ExpressCraft;


namespace ExpressCraft.Bootstrap
{
	public class FormGroupList : BootstrapDiv
	{
		public FormGroupList(params Union<string, Control, HTMLElement>[] typos) : base()
		{
			FormGroup.AppendGroupList(this, typos);
		}
	}
}
