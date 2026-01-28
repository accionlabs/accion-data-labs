-- Convert all PowerPoint files in a folder to PDF
-- Usage: osascript convert_pptx_to_pdf.scpt [optional_folder_path]
-- If no folder path is provided, it will prompt for one

on run argv
	-- Get folder path from argument or prompt user
	if (count of argv) > 0 then
		set sourceFolder to item 1 of argv
	else
		-- Default to a common data capabilities folder, or prompt
		set sourceFolder to choose folder with prompt "Select folder containing PowerPoint files:" as string
		set sourceFolder to POSIX path of sourceFolder
		-- Remove trailing slash if present
		if sourceFolder ends with "/" then
			set sourceFolder to text 1 thru -2 of sourceFolder
		end if
	end if

	tell application "Finder"
		try
			set pptFiles to every file of folder (sourceFolder as POSIX file) whose name extension is in {"pptx", "ppt"}
		on error
			display dialog "Invalid folder path: " & sourceFolder buttons {"OK"} default button 1
			return
		end try
	end tell

	if (count of pptFiles) is 0 then
		display dialog "No PowerPoint files found in: " & sourceFolder buttons {"OK"} default button 1
		return
	end if

	tell application "Microsoft PowerPoint"
		activate

		set convertedCount to 0
		set errorCount to 0

		repeat with aFile in pptFiles
			try
				set filePath to aFile as alias

				tell application "Finder"
					set fileName to name of aFile
					set fileExt to name extension of aFile
				end tell

				-- Open the presentation
				open filePath

				-- Get the base name without extension
				if fileExt is not "" then
					set baseName to text 1 thru -((length of fileExt) + 2) of fileName
				else
					set baseName to fileName
				end if

				-- Set output path
				set outputPath to sourceFolder & "/" & baseName & ".pdf"

				-- Save as PDF
				save active presentation in outputPath as save as PDF

				-- Close the presentation
				close active presentation saving no

				log "Converted: " & fileName
				set convertedCount to convertedCount + 1

			on error errMsg
				log "Error converting " & fileName & ": " & errMsg
				set errorCount to errorCount + 1
				try
					close active presentation saving no
				end try
			end try
		end repeat

		set summaryMsg to "Conversion complete!" & return & return
		set summaryMsg to summaryMsg & "Successfully converted: " & convertedCount & " file(s)" & return
		if errorCount > 0 then
			set summaryMsg to summaryMsg & "Errors: " & errorCount & " file(s)" & return
		end if
		set summaryMsg to summaryMsg & return & "Output folder: " & sourceFolder

		display dialog summaryMsg buttons {"OK"} default button 1
	end tell
end run
