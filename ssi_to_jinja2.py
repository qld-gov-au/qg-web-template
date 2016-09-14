import sys
import os
import re
from tempfile import mkstemp
from shutil import move

re_ssi = re.compile('<!--#include .*-->')
re_echo = re.compile('value=".*"')
re_echo_all = re.compile('<!--#echo.*-->')

#Expecting a path to directory eg /home/user/swe/build/
rootdir = sys.argv[1]
for root, subdirs, files in os.walk(rootdir):
    files = ["{0}{1}{2}".format(root,os.path.sep,s) for s in files]
    for file_path in files:
        include_js_snippet = False
        #Create temp file
        fh, abs_path = mkstemp()
        with open(abs_path,'w') as new_file:
            with open(file_path) as old_file:
                for line in old_file:
                    if '<!--#include' in line:
                        new_file.write(line.replace('<!--#include virtual=','{% include ').replace('-->',' %}'))
                    elif '<!--#set' in line:
                        new_file.write(line.replace('<!--#set var="','{% set ').replace('" value=',' = ').replace('-->',' %}'))
                    elif '<!--#echo' in line:
                        if 'REQUEST_URI' in line:
                            if 'value=' in line:
                                new_file.write(re_echo.sub('value="{{ full_current_url }}"',line))
                            else:
                                new_file.write(re_echo_all.sub('{{ full_current_url }}',line))
                        elif 'VHOST' in line:
                            if 'value=' in line:
                                new_file.write(re_echo.sub('value=""',line))
                            else:
                                new_file.write(re_echo_all.sub('',line))
                        elif 'SERVED_BY' in line:
                            if 'value=' in line:
                                new_file.write(re_echo.sub('value=""',line))
                            else:
                                new_file.write(re_echo_all.sub('',line))
                        elif 'SERVER_NAME' in line:
                            if 'value=' in line:
                                new_file.write(re_echo.sub('value="{{ macro_helpers.portal_type(\'site\')|trim }}.qld.gov.au"',line))
                            else:
                                new_file.write(re_echo_all.sub('{{ macro_helpers.portal_type(\'site\')|trim }}.qld.gov.au',line))
                        elif 'HTTP_REFERER' in line:
                            if 'value=' in line:
                                include_js_snippet = True
                                new_file.write(re_echo.sub('value=""',line))
                            else:
                                new_file.write(re_echo_all.sub('',line))
                        elif 'HTTP_USER_AGENT' in line:
                            if 'value=' in line:
                                include_js_snippet = True
                                new_file.write(re_echo.sub('value=""',line))
                            else:
                                new_file.write(re_echo_all.sub('',line))
                        elif 'var="franchise"' in line:
                            if 'value=' in line:
                                new_file.write(re_echo.sub('value="{{ macro_helpers.portal_type(\'site\')|trim }}.qld.gov.au"',line))
                            else:
                                new_file.write(re_echo_all.sub('{{ macro_helpers.portal_type(\'site\')|trim }}.qld.gov.au',line))
                        elif 'var="title"' in line:
                            if 'value=' in line:
                                new_file.write(re_echo.sub('value="{{ page_title }}"',line))
                            else:
                                new_file.write(re_echo_all.sub('{{ page_title }}',line))
                        else:
                            if 'value=' in line:
                                new_file.write(re_echo.sub('value=""',line))
                            else:
                                new_file.write(re_echo_all.sub('',line))
                    else:
                        new_file.write(line)
                if include_js_snippet == True:
                    new_file.write('{% snippet "snippets/swe_js_includes.html" %}')
        os.close(fh)
        os.remove(file_path)
        move(abs_path, file_path)
