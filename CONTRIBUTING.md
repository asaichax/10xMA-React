# Contributing to 10XMA Creative Production & Media Agency Website

Thank you for your interest in contributing to the 10XMA website! This document provides guidelines for contributing to the project.

## 🎯 **Project Overview**

This is the official website for 10XMA Creative Production & Media Agency, a Toronto-based company specializing in:
- Video Production
- Podcast Production
- Social Media Content
- Live Streaming
- Brand Storytelling

## 🛠 **Tech Stack**

- **React 18** with TypeScript
- **Vite** for build tooling
- **Bootstrap 5** for styling
- **Custom CSS** for gradients and components
- **Lucide React** for icons

## 🚀 **Getting Started**

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Setup
1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/marketing-spa.git
   cd marketing-spa
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
4. **Start** development server:
   ```bash
   npm run dev
   ```

## 📝 **Development Guidelines**

### Code Style
- Use **TypeScript** for all new code
- Follow **ESLint** rules
- Use **Prettier** for formatting
- Write **descriptive commit messages**

### Component Guidelines
1. **Use functional components** with hooks
2. **Define TypeScript interfaces** for props
3. **Use Bootstrap classes** for layout
4. **Add custom CSS** only when necessary
5. **Keep components focused** and reusable

### File Structure
```
src/
├── components/          # React components
├── types/              # TypeScript interfaces
├── content/            # Site content and config
└── index.css           # Global styles
```

## 🎨 **Styling Guidelines**

### Bootstrap Usage
- Use Bootstrap classes for layout and spacing
- Leverage Bootstrap's responsive grid system
- Use Bootstrap utilities for common styling needs

### Custom CSS
- Add custom CSS in `src/index.css`
- Use CSS custom properties for consistent theming
- Follow BEM methodology for custom classes
- Keep custom CSS minimal and focused

### Color Scheme
- Primary: Blue to purple gradients
- Text: Dark colors for readability
- Backgrounds: Gradient variations per section
- Buttons: Custom gradient styles

## 🔧 **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 📋 **Pull Request Process**

### Before Submitting
1. **Test** your changes thoroughly
2. **Run** linting: `npm run lint`
3. **Build** the project: `npm run build`
4. **Test** on different screen sizes
5. **Update** documentation if needed

### PR Guidelines
1. **Clear title** describing the change
2. **Detailed description** of what was changed
3. **Screenshots** for visual changes
4. **Link** to any related issues
5. **Check** that all tests pass

### Commit Message Format
```
type(scope): description

feat(contact): add form validation
fix(hero): resolve text visibility issue
docs(readme): update tech stack information
style(buttons): improve hover effects
```

## 🐛 **Bug Reports**

### Before Reporting
1. **Search** existing issues
2. **Test** on different browsers
3. **Check** browser console for errors
4. **Verify** the issue is reproducible

### Bug Report Template
```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- Browser: [e.g., Chrome, Firefox]
- OS: [e.g., macOS, Windows]
- Version: [e.g., 1.0.0]

**Screenshots**
If applicable, add screenshots
```

## 💡 **Feature Requests**

### Before Requesting
1. **Check** if the feature already exists
2. **Consider** if it aligns with project goals
3. **Think** about implementation complexity

### Feature Request Template
```markdown
**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
How should this feature work?

**Alternative Solutions**
What other approaches were considered?

**Additional Context**
Any other relevant information
```

## 📚 **Documentation**

### Updating Documentation
- Keep README.md current
- Update component comments
- Document new features
- Maintain deployment guides

### Documentation Standards
- Use clear, concise language
- Include code examples
- Add screenshots when helpful
- Keep structure consistent

## 🔒 **Security**

### Security Guidelines
- Don't commit sensitive information
- Use environment variables for secrets
- Validate all user inputs
- Follow security best practices

### Reporting Security Issues
- **Email**: 10XMAinc@gmail.com
- **Subject**: "Security Issue - 10XMA Website"
- **Include**: Detailed description and steps to reproduce

## 🤝 **Community Guidelines**

### Code of Conduct
- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow project conventions

### Communication
- Use clear, professional language
- Be patient with newcomers
- Ask questions when unsure
- Share knowledge and resources

## 📞 **Getting Help**

### Resources
- **Documentation**: README.md and DEPLOYMENT.md
- **Issues**: GitHub Issues page
- **Discussions**: GitHub Discussions (if enabled)
- **Email**: 10XMAinc@gmail.com

### Questions
- Search existing issues first
- Provide context and details
- Include error messages
- Share relevant code snippets

## 🎉 **Recognition**

### Contributors
- All contributors will be recognized in the project
- Significant contributions may be highlighted
- Credit will be given in commit history

### Types of Contributions
- **Code**: Bug fixes, features, improvements
- **Documentation**: Guides, tutorials, examples
- **Design**: UI/UX improvements, graphics
- **Testing**: Bug reports, testing, feedback
- **Community**: Helping others, organizing

---

**Thank you for contributing to 10XMA! 🚀**

Your contributions help us create better experiences for our clients and showcase our creative work effectively.
