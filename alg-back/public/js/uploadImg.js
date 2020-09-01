function uploadImg(file) {
  // 获取文件后缀名的函数
	const ext = getFileExt(req.file.name) 
	let formData = new FormData();
	formData.append("uploadFile", file, file.name);
	let config = {
		headers: {
			"Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
		}
	}
}