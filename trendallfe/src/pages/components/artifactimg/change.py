import os

def write_file_names_to_text(directory):
    # Get a list of all files in the directory
    files = os.listdir(directory)
    
    # Filter out only the file names (excluding directories)
    file_names = [file for file in files if os.path.isfile(os.path.join(directory, file))]
    
    # Write file names to a text file
    with open("image_files.txt", "w") as f:
        f.write("const imageFiles = [\n")
        for file_name in file_names:
            f.write(f"    '{file_name}',\n")
        f.write("];\n")

# Example usage:
if __name__ == "__main__":
    # Get the directory path where the script is located
    script_directory = os.path.dirname(os.path.abspath(__file__))
    write_file_names_to_text(script_directory)
