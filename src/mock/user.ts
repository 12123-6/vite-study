//用于创造假的接口
//用户信息数据
function createUserList() {
	return [
		{
			userId: 1,
			avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
			username: '2023105380120',
			password: '2023105380120',
			desc: '平台管理员',
			roles: ['平台管理员'],
			buttons: ['cuser.detail'],
			routes: ['home'],
			token: 'Admin Token',
		},
		{
			userId: 2,
			avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
			username: '2024105380120',
			password: '2024105380120',
			desc: '系统管理员',
			roles: ['系统管理员'],
			buttons: ['cuser.detail', 'cuser.user'],
			routes: ['home'],
			token: 'System Token',
		},
	];
}
// 定义一个接口来描述body的结构
interface LoginBody {
	username: string;
	password: string;
}

// 定义一个接口来描述request的结构
interface Request {
	headers: {
		token?: string;
	};
}
export default [
	// 用户登录接口
	{
		url: '/api/user/login', //请求地址
		method: 'post', //请求方式
		response: ({ body }: { body: LoginBody }) => {
			//获取请求体携带过来的用户名与密码
			const { username, password } = body;
			//调用获取用户信息函数,用于判断是否有此用户
			const checkUser = createUserList().find(
				(item) => item.username === username && item.password === password
			);
			//没有用户返回失败信息
			if (!checkUser) {
				return { code: 201, data: { message: '登录失败：用户名或密码错误，请重新输入' } };
			}
			//如果有返回成功信息
			const { token } = checkUser;
			return { code: 200, data: { token } };
		},
	},
	// 获取用户信息
	{
		url: '/api/user/info',
		method: 'get',
		response: (request: Request) => {
			//获取请求头携带token
			const token = request.headers.token;
			//查看用户信息是否包含有次token用户
			const checkUser = createUserList().find((item) => item.token === token);
			//没有返回失败的信息
			if (!checkUser) {
				return { code: 201, data: { message: '获取用户信息失败：无效的用户令牌，请重新登录' } };
			}
			//如果有返回成功信息
			return { code: 200, data: { checkUser } };
		},
	},
];
